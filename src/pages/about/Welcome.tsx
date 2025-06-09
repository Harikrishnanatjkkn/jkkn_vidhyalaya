import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="relative mt-20">
      <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
        <img
          src="../../banner.jpg"
          alt="Welcome to JKKN"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to JKKN School
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Empowering minds, shaping futures since 1965
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/founder.jpg"
                  alt="Shri. J.K.K. Natarajah - Founder"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">Shri. J.K.K. Natarajah</h3>
                  <p className="text-gray-200">Founder, J.K.K. Rangammal Charitable Trust</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Legacy of Excellence
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  In 1960's, the female children in Kumarapalayam had to walk 2.5 k.m. for their 
                  schooling to the nearby town Bhavani. Some parents hesitated to send, some ceased 
                  their children schooling. All resulted them to stay either at homes or to work in 
                  handlooms and dyeing industries.
                </p>
                
                <p>
                  Realizing the need of women education, a visionary philanthropist of the zone, 
                  Shri. J.K.K. Natarajah, initiated a girls school in the town in 1965, four years 
                  before the inception of the trust.
                </p>

                <p>
                  The trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 
                  with the motif of providing literacy, women empowerment resulting to upgraded 
                  socio-economic status of the people. Walking on the footprints of her father, 
                  Shrimathi.N. SENDAMARAAI, Managing trustee, expanded the service by providing 
                  multi-disciplinary education to both genders.
                </p>

                <p>
                  Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, 
                  Nursing, Education, Engineering, Arts and Science colleges and Govt. Aided Girls 
                  School, Matriculation schools.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Social Impact</h4>
                  <p className="text-blue-800">
                    The trust involves itself in many social service activities inclusive of health 
                    oriented services such as free dental camps, free treatments and surgeries, blood 
                    donation camps, motivational and entrepreneurship awareness camps. The trust also 
                    extends its charitable hands; medical support to the impoverished, helping destitute, 
                    natural calamities support, education and scholarship support to poor students and 
                    culture support.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 