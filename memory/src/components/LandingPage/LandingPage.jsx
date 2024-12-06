const LandingPage = () => {
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <div className=" flex flex-col items-center">
       <h1>MEMORY</h1>
        <img
          className="w-[50%]"
          src="https://images.everydayhealth.com/images/neurology/types-of-memory-1440x810.jpg?sfvrsn=1edbb6b_3"
          alt="picture on a brain"
        />
        <button className="mb-8">Resultat</button>
        <button>Spela</button>
      </div>
    </div>
  );
};

export default LandingPage;
