interface Heading {
  text: string;
}

const HeadingText = ({ text }: Heading) => {
  return <h2 className='text-2xl uppercase text-orange-600 font-bold my-6'>{text}</h2>;
};

export default HeadingText;
