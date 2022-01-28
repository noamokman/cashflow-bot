import type { Entity } from './entity.js';

export interface BaseIntegration<Type = string, Payload = {}> extends Entity {
  type: Type;
  enabled: boolean;
  payload: Payload;
}

export type BalanceCheck = BaseIntegration<
  'balanceCheck',
  {
    cron: string;
  }
>;

export type TransactionsReporting = BaseIntegration<
  'transactionsReporting',
  {
    cron: string;
  }
>;

export type Integration = BalanceCheck | TransactionsReporting;
