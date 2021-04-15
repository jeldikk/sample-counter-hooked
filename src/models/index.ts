export interface ActionType{
    type: 'INCREMENT' | 'DECREMENT' | 'SET_RECENT_ACTION' | "CLEAR";
    payload?: string | null;
  }
  
export type StateType = {
    count: number;
    recentAction?: string | null;
}