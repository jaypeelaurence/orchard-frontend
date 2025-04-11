import { Content, Image, SubTitle, Title } from '../../../ui/components';
import { Section } from '../../../ui/layouts';
import { cn } from '../../../utils';

import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';

function Section1() {
  return (
    <Section>
      <div className={cn(
        'flex',
        'flex-col',
        'md:flex-col',
        'lg:flex-row',
        'space-y-[30px]',
        'md:space-y-[30px]',
        'lg:space-x-[30px]',
        'items-center',
      )}>
        <div className={cn(
          'space-x-0',
          'sm:space-x-0',
          'md:space-x-[10px]',
          'space-y-[10px]',
          'sm:space-y-[10px]',
          'md:space-y-0',
          'flex',
          'flex-col',
          'sm:flex-col',
          'md:flex-row',
        )}>
          <Image
            alt='image 1'
            src={image1}
            className={cn('h-[600px] w-[372px]')}
          />
          <div className={cn('space-y-[10px]', 'flex', 'flex-col')}>
            <Image
              alt='image 2'
              src={image2}
              className={cn('h-[295px] w-[372px]')}
            />
            <Image
              alt='image 3'
              src={image3}
              className={cn('h-[295px] w-[372px]')}
            />
          </div>
        </div>
        <section className={cn(
          'space-y-[30px]',
          'w-full',
          'md:w-full',
          'lg:w-[362px]',
          'text-center',
        )}>
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
