import { Content, SubTitle, Title } from '../../../ui/components';
import { Section } from '../../../ui/layouts';
import { cn } from '../../../utils';

interface COLOR {
  image: string;
  title: string;
  description: string;
}

interface DATA_COLOR {
  data: COLOR;
}

const COLORS: COLOR[] = [
  {
    image: '',
    title: 'Red',
    description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.'
  },
  {
    image: '',
    title: 'Green',
    // eslint-disable-next-line max-len
    description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours'
  },
  {
    image: '',
    title: 'White',
    // eslint-disable-next-line max-len
    description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.'
  }
];

const Color = ({ data }: DATA_COLOR) => (
  <section className={cn('basis-1/3', 'space-y-[30px]')}>
    {data.image}
    <div className={cn('')}>
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
