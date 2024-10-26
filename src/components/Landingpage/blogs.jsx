import React from "react";

function BlogSection() {
  const blogs = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "The Future of Telehealth",
      excerpt:
        "Explore how advancements in technology are making healthcare more accessible and efficient.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Mental Health Matters",
      excerpt:
        "Understanding the importance of mental health and how telehealth supports emotional well-being.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "AI Revolution in Healthcare",
      excerpt:
        "Discover the ways artificial intelligence is transforming diagnostics and patient care.",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#F3F4F6] py-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-[40px] sm:text-[56px] font-semibold text-[#0512EC]">
          Our Latest Blogs
        </h2>
        <p className="text-[18px] sm:text-[20px] text-[#333] mt-4">
          Stay updated with the latest news, tips, and insights from our team.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[70rem] mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[16rem] object-cover"
            />
            <div className="p-6">
              <h3 className="text-[24px] font-semibold text-[#0512EC]">
                {blog.title}
              </h3>
              <p className="text-[16px] text-main mt-2">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="inline-block mt-4 text-main font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
