import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-4 px-4  border border-solid dark:border-none bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-dark-lite dark:to-dark-light dark:text-white-deep">
      <div className="w-11/12 flex-col lg:flex-row flex items-center justify-between mx-auto space-y-4">
        {/* Branding */}
        <div>
          <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
            <span className="text-primary1">
              <span>&lt;</span>I
            </span>
            dowu
            <span className="text-primary2">/&gt;</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex max-sm:flex-col justify-center items-center space-x-5 max-sm:space-y-5">
          {/* Mobile Email */}
          <a className="lg:hidden" href="mailto:idowujo042@gmail.com" target="_blank" rel="noopener noreferrer">
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">idowujo042@gmail.com</p>
          </a>

          {/* Desktop Email */}
          <a className="hidden lg:block" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=idowujo042@gmail.com" target="_blank" rel="noopener noreferrer">
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">idowujo042@gmail.com</p>
          </a>

          {/* Phone */}
          <a href="tel:+8801743892058">
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">+2349168216977</p>
          </a>

          {/* Social Icons */}
          <div className="flex space-x-2 mt-2 social-icon mb-3">
            <ul className="flex gap-3 items-center justify-center lg:justify-start">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61574552880677" target="_blank" rel="noopener noreferrer">
                  <Facebook size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a href="https://github.com/idowest042" target="_blank" rel="noopener noreferrer">
                  <Github size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/idowu-joseph-6a8343328" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/2349168216977" target="_blank" rel="noopener noreferrer">
                  <Phone size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a className="lg:hidden" href="mailto:idowujo042@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <Mail size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a className="hidden lg:block" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=idowujo042@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <Mail size={30} className="hero-icon lang" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
