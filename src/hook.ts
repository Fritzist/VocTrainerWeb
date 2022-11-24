import postgres from 'postgres';
import type { Handle } from '@sveltejs/kit';


export const handle = async function({event, resolve}) {
  const sql = postgres('postgres://voc_trainer:voc_trainer@localhost:5432/voc_trainer');

  event.locals = {
    sql: sql
  };
  const response = await resolve(event);
  return response;
} as Handle;