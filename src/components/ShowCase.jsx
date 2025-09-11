import React from 'react'
import CommonHead from './common/CommonHead'
import ShowCaseCard from './ShowCaseCard'
import showcaseimage1 from '../assets/images/Showcase1.png'
import showcaseimage2 from '../assets/images/Showcase2.png'
import showcaseimage3 from '../assets/images/Showcase3.png'
import showcaseimage4 from '../assets/images/Showcase4.png'
import CommonButton from './common/CommonButton'


const ShowCase = () => {
  return (
    <>
    <section id='showcase' className='mt-[96px]'>
        <div className="container">
            <CommonHead  commonContent2={"Recent Showcase"}/>
            <div className='flex flex-wrap gap-[72px] items-center'>
                    <div>
                        <ShowCaseCard    showcaseimage={showcaseimage1} showcaseheading={'Web UI design'} showcasepara={'Creative  UI design'}/>
                        <ShowCaseCard  marginTopValue={'mt-[88px]'} showcaseimage={showcaseimage2} showcaseheading={'UI design'} showcasepara={'Creative Rebranding for logo'}/>
                    </div>
                    <div className='mt-[172px]'>
                        <CommonButton marginbottomvalue={'mb-[51px]'} />
                        <ShowCaseCard showcaseimage={showcaseimage3} showcaseheading={'To design Digital Strategy'} showcasepara={'Social Media Marketing'}/>
                        <ShowCaseCard  marginTopValue={'mt-[93px]'} showcaseimage={showcaseimage4} showcaseheading={'UI design'} showcasepara={'Creative Rebranding for logo'}/>

                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShowCase