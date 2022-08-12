/** @jsx h */
import { h } from 'preact';
import AppHeader from '../components/generated-components/components/app-header.js';
import Highlight from '../islands/Highlight.tsx';

export default function Home() {
  return (
    <div>
      <AppHeader framework="fresh" path="/todo" />
      <Highlight />
    </div>
  );
}
