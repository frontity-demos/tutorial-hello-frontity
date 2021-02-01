import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Arial, sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Frontity Workshop</h1>
          {
            state.theme.isUrlVisible ? (
              <>
                Current URL: {state.router.link}{" "}
                <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
              </>
            ) : (
              <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
            )
          }
          <Menu>
            <Link link="/">Home</Link>
            <Link link="/destinations">Destinations</Link>
            <Link link="/about-us">About Us</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
        </Switch>
      </Main>
    </>
  );
};

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};

  h1 {
    color: #4a4a4a;
  }
`;
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

export default connect(Root);