import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.scss'
import {SubTitle, Title, TitleContainer} from './components/titles';
import {Accordion, Toggle} from './components/accordion';
import {Button, ButtonLink, ButtonSizes} from './components/buttons';
import {Alert} from './components/alert';
import {Tabs} from './components/tabs';
import {SocialLink, SocialLinkViews} from './components/social-link';
import {Blockquote} from './components/blockquote';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <TitleContainer>
            <Title>Shortcodes</Title>
            <SubTitle>Useful and Indispensable.</SubTitle>
          </TitleContainer>
        </div>
        <div className={styles.accordion}>
          <Accordion
            title={'Accordion'}
            items={[
              {title: 'title 1', content: 'text item 1',},
              {title: 'title 2', content: 'text item 2',},
              {
                title: 'title 3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, expedita!',
              },
              {
                title: 'title 4',
                content: 'Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier_1046'
              },
            ]}
          />
        </div>
        <div className={styles.toggle}>
          <Toggle
            title={'Toggle'}
            items={[
              {title: 'title 1', content: 'text item 1',},
              {title: 'title 2', content: 'text item 2',},
              {
                title: 'title 3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, expedita!',
              },
              {
                title: 'title 4',
                content: 'Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier_1046'
              },
            ]}
          />
        </div>
        <div className={styles.buttons}>
          <ol>
            <li>
              <Button
                title={'mini'}
                size={ButtonSizes.mini}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              >123</Button>
              <Button
                title={'mini'}
                size={ButtonSizes.mini}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
            </li>
            <li>
              <ButtonLink
                href={'#'}
                title={'mini'}
                size={ButtonSizes.mini}
              >123 link</ButtonLink>
              <ButtonLink
                href={'#'}
                title={'mini link'}
              />
            </li>
            <li>
              <Button
                title={'small'}
                size={ButtonSizes.small}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
              <Button
                title={'small'}
                size={ButtonSizes.small}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
            </li>
            <li>
              <Button
                title={'medium'}
                size={ButtonSizes.medium}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
              <Button
                title={'medium'}
                size={ButtonSizes.medium}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
            </li>
            <li>
              <Button
                title={'large'}
                size={ButtonSizes.large}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
              <Button
                title={'large'}
                size={ButtonSizes.large}
                onClick={() => {
                  console.log('res:btn:onClick');
                }}
              />
            </li>
          </ol>
        </div>
        <div className={styles.alerts}>
          <Alert
            title={'qwe'}
            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quisquam.'}
          />
          <Alert content={'1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quisquam.'} />
        </div>
        <div className={styles.tabs}>
          <Tabs
            tabs={[
              {
                title: '1',
                code: '1',
                content: '1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.'
              },
              {title: '2', code: '2', content: '2Lorem ipsum dolor sit.'},
              {title: '3', code: '3', content: '3Lorem ipsum dolor sit.'},
            ]}
          />
        </div>
        <div className={styles.socialLinks}>
          <SocialLink typeView={SocialLinkViews.brick} link={'123'} />
          <SocialLink typeView={SocialLinkViews.simple} link={'qwe'} />
        </div>
        <div className={styles.blockquote}>
          <Blockquote
            author={'Lorem ipsum.'}
            title={'Lorem ipsum dolor.'}
            content={`
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem culpa distinctio doloremque
eligendi esse ex, excepturi exercitationem, fugiat inventore ipsum iusto laudantium non officia possimus
reprehenderit sapiente voluptates.
            `}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
