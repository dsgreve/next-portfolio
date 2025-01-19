import React from 'react'
import { gridItems } from '@/data';

import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
function Grid() {
  return (
    <section id="about" className="pt-[230px]">
      <h2 className="text-center text-copy font-serif text-3xl font-bold mb-10">About Me</h2>
      <BentoGrid>
        {gridItems.map(({id, title, description, className, titleClassName}) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            titleClassName={titleClassName}
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid