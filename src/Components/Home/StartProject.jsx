import hand from '../../assets/Images/project.svg';

const StartProject = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between w-11/12 lg:w-9/12 mx-auto bg-[#172635] px-14 max-sm:px-6 py-12 rounded-2xl dark:bg-dark-lite">
        <div>
          <h4 className="text-2xl text-white font-semibold">Start a Project</h4>
        </div>
        <div>
          <p className="text-base text-center text-white">
            Interested in working together? We should <br className="hidden lg:block" />
            queue up a time to chat. I’ll buy the tea.
          </p>
        </div>
        <a href="#contact-me">
          <div className="flex cursor-pointer items-center justify-center border-t-2 border-solid border-primary1 gap-2 bg-gradient-to-b from-[#2fa258] to-[#194541] px-4 py-2 rounded-xl transition-all duration-500 hover:from-[#003f3b] hover:to-[#2fa258]">
            <p>
              <img src={hand} alt="Project Icon" />
            </p>
            <p className="text-white text-sm font-bold">Let&apos;s do it</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default StartProject;
