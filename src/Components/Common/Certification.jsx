import React from 'react';
import { Heading } from './Heading';
import CertificationImg1 from '../../assets/Images/certfication.jpg';
import CertificationImg2 from '../../assets/Images/certification (1).jpg';
import CertificationImg3 from '../../assets/Images/certification (2).jpg';

const Certifications = () => {
  const certifications = [
    { id: 1, src: CertificationImg1, alt: "Certification 1" },
    { id: 2, src: CertificationImg2, alt: "Certification 2" },
    { id: 3, src: CertificationImg3, alt: "Certification 3" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <Heading headingTitle="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-auto object-cover"
              src={cert.src}
              alt={cert.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;