import { Content, SubTitle, Title } from '../../../ui/components';
import { Section } from '../../../ui/layouts';
import { cn } from '../../../utils';

function Section1() {
  return (
    <Section>
      <div className={cn('flex', 'space-x-[30px]')}>
        <section className={cn('space-y-[30px]')}>
        </section>
        <section className={cn('space-y-[30px]', 'w-[362px]')}>
          <Title>WHAT DOES COOKING MEAN?</Title>
          <Content>
            {
            // eslint-disable-next-line max-len
              'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...'
            }
          </Content>
          <div className={cn('space-y-[10px]', 'text-15px', 'font-bold')}>
            <h3
              className={cn(
                'text-subTitle',
              )}
            >
              THE PERFECT EGG
            </h3>
            <SubTitle>
              Keep water between 67 and 68°C for a flavourful, tender yolk
            </SubTitle>  
          </div>
        </section>
      </div>
    </Section>
  );
}

export default Section1;
