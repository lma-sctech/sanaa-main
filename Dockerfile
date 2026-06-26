# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base

ENV NEXT_TELEMETRY_DISABLED=1 \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH

RUN corepack enable

WORKDIR /workspace

FROM base AS builder

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/main/package.json apps/main/package.json
COPY apps/premium-travel/package.json apps/premium-travel/package.json
COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/typescript-config/package.json packages/typescript-config/package.json

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY apps apps
COPY packages packages
COPY scripts scripts

RUN pnpm build

FROM nginx:alpine AS main

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/apps/main/out /usr/share/nginx/html
EXPOSE 80

FROM nginx:alpine AS premium-travel

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/apps/premium-travel/out /usr/share/nginx/html
EXPOSE 80
