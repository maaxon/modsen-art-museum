import SearchForm from '@components/sections/SearchForm/searchForm.tsx';
import Topics from '@components/sections/Topics/topics.tsx';
import OtherWorks from '@components/sections/Other Works/otherWorks.tsx';

const Home = () => {
  return (
    <>
      <SearchForm />
      <Topics />
      <OtherWorks />
    </>
  );
};

export default Home;
