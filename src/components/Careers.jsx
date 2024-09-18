import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; // Ensure this file exports Firebase storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    mobile: '',
    email: '',
    resume: null,
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let resumeUrl = '';

    if (formData.resume) {
      // Upload resume to Firebase Storage
      const resumeRef = ref(storage, `resumes/${formData.resume.name}`);
      try {
        await uploadBytes(resumeRef, formData.resume);
        resumeUrl = await getDownloadURL(resumeRef);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
        setUploading(false);
        return;
      }
    }

    // Call Firebase Function to send email
    const functions = getFunctions();
    const sendApplicationEmail = httpsCallable(functions, 'sendApplicationEmail');

    sendApplicationEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      qualification: formData.qualification,
      mobile: formData.mobile,
      email: formData.email,
      resumeUrl: resumeUrl,
      recipientEmail: 'prasanna.es11@gmail.com', // Enter recipient email here
    })
      .then(() => {
        alert('Your application has been sent!');
        setFormData({
          firstName: '',
          lastName: '',
          qualification: '',
          mobile: '',
          email: '',
          resume: null,
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Form Section */}
          <div className="w-full md:w-2/3 lg:w-1/2 p-4 flex flex-col">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join Our Team</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Qualification</label>
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm file:py-2 file:px-4 file:border-0 file:rounded-md file:text-white file:bg-blue-600 hover:file:bg-blue-700"
                      required
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300" disabled={uploading}>
                    {uploading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <motion.div
            className="w-full md:w-1/3 lg:w-1/2 p-4 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us?</h3>
              <p className="text-gray-700 mb-4">
                At [Company Name], we value innovation, collaboration, and growth. Join us to be a part of a dynamic team where you can make an impact and grow professionally.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Competitive Salary</li>
                <li>Health Benefits</li>
                <li>Flexible Working Hours</li>
                <li>Career Development Opportunities</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Learn more about our culture and values on our <a href="#" className="text-blue-600 hover:underline">about us page</a>.
              </p>
              <p className="text-gray-700 mb-4">
                We offer a supportive work environment with a strong emphasis on team collaboration and personal growth. Our team members are encouraged to pursue their passions and develop new skills.
              </p>
              <p className="text-gray-700">
                Interested in joining us? Check out our <a href="#" className="text-blue-600 hover:underline">career opportunities</a> and see how you can contribute to our mission.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
