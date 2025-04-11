import { Content, Image, SubTitle, Title } from '../../../ui/components';
import { Section } from '../../../ui/layouts';
import { cn } from '../../../utils';

import red from '../../../assets/images/red.png';
import green from '../../../assets/images/green.png';
import white from '../../../assets/images/white.png';

interface COLOR {
  src: string;
  title: string;
  description: string;
}

interface DATA_COLOR {
  data: COLOR;
}

const COLORS: COLOR[] = [
  {
    src: red,
    title: 'Red',
    description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.'
  },
  {
    src: green,
    title: 'Green',
    // eslint-disable-next-line max-len
    description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours'
  },
  {
    src: white,
    title: 'White',
    // eslint-disable-next-line max-len
    description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.'
  }
];

const Color = ({ data }: DATA_COLOR) => (
  <section id={data?.title} className={cn('basis-1/3', 'space-y-[30px]')}>
    <Image
      alt={`${data.title} ${data.description}`}
      src={data.src}
      className={cn('h-[300px] w-[375px]')}
    />
    <div className={cn('space-y-[10px]')}>
      <SubTitle>
        {data.title}
      </SubTitle>
      <Content>
        {data.description}
      </Content>
    </div>
  </section>
);

const Section2 = () => (
  <Section className={cn('text-center', 'space-y-[30px]')}>
    <Title className={cn('inline-block')}>Taste the Colours</Title>
    <div className={cn('flex', 'gap-2')}>
      {
        COLORS.map((data, index) => <Color data={data} key={index} />)
      }
    </div>
  </Section>
);

export default Section2;
