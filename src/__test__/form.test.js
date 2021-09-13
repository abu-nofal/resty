import React from 'react';
import Results from '../components/results/index';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render a list of pokemon', async () => {
  const raw = await fetch ('https://pokeapi.co/api/v2/pokemon');
  let data = await raw.json();
  let pokemon = data.results;
  let results = Object.entries(pokemon);

  render(<Results src={results} />);

  expect(results).toBeTruthy();
});