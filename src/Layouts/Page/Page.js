import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany';

function Page() {
  return (
    <div className='flex-grow-1'>
      <Header/>
      <div>  {/* Bootstrap контейнер */}
        <AboutCompany/>  {/* Страница выбирается нажатием на сайдбаре. Сейчас это только AboutCOmpany. */}
      </div>
    </div>
  );
}

export default Page;