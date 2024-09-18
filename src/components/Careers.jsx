import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; // Adjust the path as necessary
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFunctions, httpsCallable } from 'firebase/functions';

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
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md border border-gray-200">
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
    </section>
  );
};

export default Careers;
