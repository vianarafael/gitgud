import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { createClient } from "contentful";

import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyling = createGlobalStyle`
	* {

	box-sizing: border-box;
	}

	${normalize}

	html,
	body {
	height: 100%;
	margin: 0;
	padding: 0;
	}

	body {
	font-family: Montserrat, sans-serif;
	}

	/* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  a {
    cursor: pointer
  }
`;

const Wrapper = styled.div`
  text-align: center;
  color: #222;
  max-width: 680px;
  margin: 0 auto;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Posts = styled.div`
  line-height: 1.4;
  flex: 1 0 auto;
  .post {
    margin-top: 3rem;
    text-align: left;
    h3 {
      font-size: 1.75rem;
      font-weight: 700s;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
    }

    pre {
      margin-top: 1.75rem;
      padding: 1rem 2rem;
      overflow: auto;
      box-shadow: 1px 1px 0.5em black inset;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      line-height: 1.5;
      tab-size: 4;
      hyphens: none;
      background: hsl(200, 4%, 16%);
      code {
        color: #fff;
      }
    }
  }
  p {
    margin-top: 1.75rem;
  }
  .ellipses {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default function Page({ posts }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <title>Git Solution Log</title>
      </Head>
      <GlobalStyling />
      <Wrapper>
        <Header />
        <main>
          <Posts>
            {posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <h3 className="ellipsis" key={post.id}>
                    <a href={post.id}>{post.fields.title}</a>
                  </h3>
                  <pre>
                    {post.fields.terminal.content[0].content.map(
                      (content_line, index) => {
                        return <code key={index}>{content_line.value}</code>;
                      }
                    )}
                  </pre>
                  <p>{post.fields.content.content[0].content[0].value}</p>
                </div>
              );
            })}
          </Posts>
        </main>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEI,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: { posts: res.items }, // will be passed to the page component as props
  };
}
