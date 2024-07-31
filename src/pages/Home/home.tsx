import SearchForm from '@components/SearchForm/searchForm.tsx';
import Topics from '@components/Topics/topics.tsx';
import OtherWorks from '@components/Other Works/otherWorks.tsx';

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
