export interface DomainEvent<T = unknown> { id: string; type: string; occurredAt: string; payload: T; }
