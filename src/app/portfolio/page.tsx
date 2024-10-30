import { FaHouse } from 'react-icons/fa6';
import Link from 'next/link';
import { projects } from '@/utils/projects';
import { Footer } from '@/components/footer';
import Slider from './components/slider';
import { TitleSection } from '@/components/title-section';

export default function Portfolio() {
  return (
    <div>
      <div className="">
        <TitleSection
          title="Portifólio"
          description={[{ highlighted: false, text: 'Alguns dos meus' }, { highlighted: true, text: 'projetos' }]}
        />
        <Link href="/" className="h-12 md:h-16 w-12 md:w-16 fixed z-10 right-2 md:right-12 top-1 md:top-12 bg-white rounded-full shadow-xl grid place-items-center cursor-pointer hover:brightness-90 transition hover:text-action">
          <FaHouse size="40%" />
        </Link>
        <div className=" px-2 md:px-5">
          {
            Object.keys(projects).map((chave: string) => (
              <div id={chave}>
                <div className="pt-16">
                  <h3 className="text-4xl font-semibold">
                    {chave}
                    :
                  </h3>
                  <Slider projects={projects[chave]} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
