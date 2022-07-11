import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';
import * as React from 'react';


export default function Home() {
  const [data, setData] = useState( { text:'' });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
      setIsLoading(true);
      const res = await fetch(`/api/openai`, {
        body: JSON.stringify({
          name: search
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }};

    fetchData();
  }, [search]);


  
  return (
    <div className={styles.container}>
      <Head>
        <title>GPT-3 Copy Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Copy Generator</a>
        </h1>

        <div>
          <label>
            <input 
              type="checkbox" 
              checked={checked}
              onChange={handleChange}
            />
            Product 
            </label>
            &nbsp;
            &nbsp;
            <label>
            <input 
              type="checkbox" 
              checked={checked}
              onChange={handleChange}
            />
            Service
            </label>
        </div>
        

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Description:</h3>
            <input
          type="textarea"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Please select one of the two options!"
        />
        <div>
          <button
            type="button"
            onClick={() =>
            setSearch(query)
            }
          >
            Generate
          </button>
        </div>

        <div>
          
        </div>
          <h4>Results</h4>  
          {isLoading ? (
            <div>Loading ...</div>
         ) : (
           <span>
           {data.text}
           </span>
           )}

          </div>
        </div>
      </main>
    </div>
  );
}