import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title dragon-decoration dragon-brand">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{
          fontSize: '1.3rem',
          color: 'var(--dragon-text-secondary)',
          marginBottom: '2rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg dragon-button"
            to="/docs/intro">
            🚀 开始探索知识库
          </Link>
        </div>
      </div>
    </header>
  );
}

function TechStats(): ReactNode {
  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
    padding: '1rem 0.5rem',
  };

  const statNumberStyle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: 'var(--dragon-red-light)',
    lineHeight: '1.2',
    textAlign: 'center' as const,
  };

  const statLabelStyle = {
    color: 'var(--dragon-gray-light)',
    fontSize: '0.9rem',
    textAlign: 'center' as const,
    whiteSpace: 'nowrap' as const,
  };

  return (
    <section className="tech-stats" style={{
      background: 'linear-gradient(135deg, var(--dragon-bg-secondary) 0%, var(--dragon-bg-primary) 100%)',
      padding: '3rem 0',
      borderTop: '1px solid var(--dragon-red)',
      borderBottom: '1px solid var(--dragon-red)',
    }}>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div style={statItemStyle}>
              <div style={statNumberStyle}>
                <span className="dragon-decoration">TS/JS</span>
              </div>
              <div style={statLabelStyle}>核心技术栈</div>
            </div>
          </div>
          <div className="col col--3">
            <div style={statItemStyle}>
              <div style={statNumberStyle}>784+</div>
              <div style={statLabelStyle}>文档行数</div>
            </div>
          </div>
          <div className="col col--3">
            <div style={statItemStyle}>
              <div style={statNumberStyle}>持续更新</div>
              <div style={statLabelStyle}>知识积累</div>
            </div>
          </div>
          <div className="col col--3">
            <div style={statItemStyle}>
              <div style={statNumberStyle}>开源分享</div>
              <div style={statLabelStyle}>学习理念</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickAccess(): ReactNode {
  const quickLinks = [
    {
      title: '📘 TypeScript 基础',
      description: '从零开始学习 TypeScript 核心概念',
      link: '/docs/typescript&javascript/base',
      icon: '🔷'
    },
    {
      title: '⚡ 最佳实践',
      description: '实际项目中的经验总结和技巧',
      link: '/docs/typescript&javascript/bestPratice',
      icon: '💡'
    },
    {
      title: '🛠️ VSCode 配置',
      description: '开发环境配置和插件推荐',
      link: '/docs/typescript&javascript/vscode',
      icon: '⚙️'
    },
    {
      title: '📝 学习笔记',
      description: '持续更新的技术学习记录',
      link: '/blog',
      icon: '📚'
    }
  ];

  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--dragon-bg-primary)',
      borderTop: '1px solid var(--dragon-red)',
    }}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2 style={{ 
            color: 'var(--dragon-red)', 
            marginBottom: '1rem',
            fontSize: '2.5rem'
          }}>
            🚀 快速开始
          </h2>
          <p style={{ 
            color: 'var(--dragon-text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            选择你感兴趣的内容，开始你的技术学习之旅
          </p>
        </div>
        <div className="row">
          {quickLinks.map((item, index) => (
            <div key={index} className="col col--3 margin-bottom--md">
              <Link 
                to={item.link}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'var(--dragon-bg-secondary)',
                  border: '1px solid var(--dragon-red)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                className="quick-access-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--dragon-red-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--dragon-red)';
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <h4 style={{ 
                    color: 'var(--dragon-red-light)', 
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--dragon-text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 个人技术知识库`}
      description="DragonOrigin的个人技术知识库，专注于TypeScript、JavaScript等前端技术的系统性学习和实践分享">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TechStats />
        <QuickAccess />
      </main>
    </Layout>
  );
}
