import React from 'react';
import '../App.css';
import CardClass from '../components/CardClass';
import { ClassData } from '../data/ClassData';

function Classes() {
  return (
    <>
    <div>
        <p class="text-6xl text-white pb-4">Classes</p>
        <p class="text-base text-white pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur purus lorem, id vehicula leo fringilla sit amet. Quisque nec augue purus. Aenean varius nec turpis quis ornare. Mauris molestie, arcu ac commodo suscipit, metus libero aliquet eros, in pharetra mauris augue ac mi. Integer mollis augue odio, vel aliquam neque porta et. Pellentesque ultricies dui velit, et scelerisque lacus pulvinar ac. Suspendisse mattis pellentesque purus, ac sollicitudin est varius non. Aliquam erat volutpat. Etiam at odio cursus, ornare orci porta, ultrices sapien. In vestibulum rhoncus odio, ut tempor neque ultrices sed. Vestibulum lobortis, ipsum sed semper auctor, nisi nunc auctor urna, vel rutrum lectus lacus ac ipsum. Sed feugiat nisl diam, a efficitur ante vestibulum quis. Donec at turpis non justo maximus rhoncus. In ac maximus tortor. Nam aliquet libero in ex tincidunt porta. Nullam egestas odio sed quam auctor sodales.</p>
        <div className="h-full grid grid-cols-3 gap-5 p-5">
            {ClassData.map((item, index) => {
                return (
                    <div>
                        <CardClass 
                            name={item.name}
                            desc={item.desc}
                            img={item.img}
                        />
                    </div>
                )
            })}
        </div>
    </div>
    
    </>
  )
}

export default Classes