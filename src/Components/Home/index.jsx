import React from 'react';
import Navbar from './Navbar';
import FilterBar from './FilterBar';
import PostCard from './PostCard';

const posts = [
  {
    name: 'Jumayev Elyor',
    title: 'Maktabgacha ta’lim',
    text: 'The first, characters are read from the input file and assigned a category code (sometimes called "catcode", for short). Combinations of a backslash (actually, any character of category zero) followed by letters (characters of category 11) or a single other character are replaced by a control-sequence token. In this sense, this stage is like lexical analysis, although it does not form numbers from digits. In the next stage, expandable control sequences (such as conditionals and macros) are replaced by their replacement text. The input for the third stage is then a stream of characters (including the ones with special meaning) and unexpandable control sequences (typically assignments and visual commands). Here, the characters are assembled into a paragraph, and TeX’s paragraph breaking algorithm works by optimizing breakpoints over the whole paragraph.',
    likes: 46
  },
  {
    name: 'Sodiqov Sodiqjon',
    title: 'Maktabgacha ta’lim',
    text: 'The first, characters are read from the input file and assigned a category code (sometimes called "catcode", for short). Combinations of a backslash (actually, any character of category zero) followed by letters (characters of category 11) or a single other character are replaced by a control-sequence token. In this sense, this stage is like lexical analysis, although it does not form numbers from digits. In the next stage, expandable control sequences (such as conditionals and macros) are replaced by their replacement text. The input for the third stage is then a stream of characters (including the ones with special meaning) and unexpandable control sequences (typically assignments and visual commands). Here, the characters are assembled into a paragraph, and TeX’s paragraph breaking algorithm works by optimizing breakpoints over the whole paragraph.',
    likes: 12
  }
];

function Home() {
  return (
    <div style={{background: '#f8fafd', minHeight: '100vh'}}>
      <Navbar />
      <FilterBar />
      <div style={{maxWidth: 900, margin: '32px auto 0 auto'}}>
        <h2 style={{fontWeight: 700, fontSize: '1.4rem', marginBottom: 18}}>Fikrlar</h2>
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Home; 