"use client";
import BlogTitles from "../BlogTitles";
import client from "../../lib/contentful";
import React, { useState, useEffect } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await client.getEntries({
          content_type: "blogs",
        });

        const formattedBlogs = response.items.map((blog) => ({
          id: blog.sys.id,
          blogTitle: blog.fields.blogTitle,
          author: blog.fields.author,
          url: blog.fields.url,
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);
  return (
    <div
      id="blogs"
      className="scroll-mt-[80px] min-h-[calc(100vh - 104px)] w-full bg-lightPink text-darkPurple resp-px p-14"
    >
      <h1 className="clash-display font-semibold text-4xl mb-10">Blogs</h1>
      <p className="text-3xl darker-grotesque font-semibold mb-6">
        Dive into insights, stories, and tutorials straight from the minds of
        our community.
      </p>
      {loading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="clash-display text-2xl text-darkPurple/80 animate-pulse">
            Loading Blogs...
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogTitles key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
