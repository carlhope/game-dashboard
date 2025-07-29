// GameService.test.ts
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { fetchGames } from './GameService';
import { fetch } from 'undici';

// Shim global fetch so GameService can use it
(globalThis as any).fetch = fetch;

// Mock response data
const mockGames = [{ id: 1, name: 'Zelda' }];

// Set up the mock server
const server = setupServer(
  http.get('http://localhost:3001/games', () => {
    return HttpResponse.json({ results: mockGames }, { status: 200 });
  })
);

// Lifecycle hooks for server control
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Actual test
test('returns games from server', async () => {
  const games = await fetchGames();
  expect(games).toEqual(mockGames);
});