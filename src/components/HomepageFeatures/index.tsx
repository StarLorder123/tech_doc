import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📚 系统化学习',
    Svg: require('@site/static/img/dragon-systematic-learning.svg').default,
    description: (
      <>
        结构化整理技术知识，从基础语法到高级特性，
        帮助建立完整的知识体系，便于系统性学习和复习。
      </>
    ),
  },
  {
    title: '💡 实践导向',
    Svg: require('@site/static/img/dragon-practical-oriented.svg').default,
    description: (
      <>
        包含丰富的代码示例和实际应用场景，
        理论结合实践，让学习更加高效和深入。
      </>
    ),
  },
  {
    title: '🚀 持续更新',
    Svg: require('@site/static/img/dragon-continuous-update.svg').default,
    description: (
      <>
        随着技术栈的扩展和学习的深入，持续补充新的知识点，
        打造一个不断完善的个人技术知识库。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <div className={styles.featureDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
