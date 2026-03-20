import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({});

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-center">
          {certifications.map((cert, index) => {
            const cardKey = `cert-${index}`;
            return (
              <ReactCardFlip key={index} isFlipped={isFlipped[cardKey]} flipDirection="horizontal">
                {/* Front Side */}
                <div
                  className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer h-full"
                  onClick={() => handleFlip(cardKey)}
                >
                  <div className="flex justify-center mb-3 text-primary text-4xl">
                    {cert.icon === 'language' ? '🌐' : <FaAws className="text-[#FF9900]" />}
                  </div>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">Issued By: {cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.period}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
                  )}
                </div>

                {/* Back Side */}
                <div
                  className="rounded-md border border-border bg-gradient-to-br from-primary to-purple-600 p-4 text-white cursor-pointer h-full flex items-center justify-center"
                  onClick={() => handleFlip(cardKey)}
                >
                  {cert.image ? (
                    <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-md" loading="lazy" />
                  ) : (
                    <div className="text-center">
                      <p className="font-semibold text-lg">{cert.name}</p>
                      <p className="text-sm opacity-90">{cert.issuer}</p>
                    </div>
                  )}
                </div>
              </ReactCardFlip>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
