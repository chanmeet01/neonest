"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { BookOpen, ExternalLink, Search, Filter, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Introducing Solids: A Step-by-Step Guide",
    description: "Learn when and how to introduce solid foods to your baby, with tips for making the transition smooth",
    url: "https://example.com/introducing-solids",
    author: "Dr. Emily Parker",
    readTime: "8 min read",
    publishDate: "2024-03-15",
    category: "feeding",
    tags: ["weaning", "nutrition", "first foods"],
    thumbnail: "https://www.motherhoodindia.com/wp-content/uploads/2021/09/Introduction-Of-Solid-Foods-To-Toddlers.jpg",
    type: "article",
  },
  {
    id: 2,
    title: "Establishing Healthy Sleep Habits",
    description: "Practical advice for helping your baby develop good sleep patterns from the start",
    url: "https://example.com/sleep-habits",
    author: "Sleep Consultant Team",
    readTime: "10 min read",
    publishDate: "2024-02-28",
    category: "sleep",
    tags: ["sleep training", "routine", "newborn"],
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-otohI9DxJtSlKG460AEhGTSSOaLk0DdOeQ&s",
    type: "video",
  },
  {
    id: 3,
    title: "Baby-Proofing Your Home: The Complete Checklist",
    description: "Essential safety measures to protect your curious crawler and toddler",
    url: "https://example.com/baby-proofing",
    author: "Safety First Organization",
    readTime: "12 min read",
    publishDate: "2024-01-20",
    category: "health",
    tags: ["safety", "childproofing", "home"],
    thumbnail: "https://images.ctfassets.net/6m9bd13t776q/6audZmURl4JJyTvbtmAM2E/67143a2ebb092cdc3a9b59e85cb10466/baby-proofing-your-home-hero-Stocksy-5081208.png?q=80",
    type: "video",
  },
  {
    id: 4,
    title: "Understanding Developmental Milestones",
    description: "What to expect in your baby's first year of growth and development",
    url: "https://example.com/developmental-milestones",
    author: "Dr. Michael Chen",
    readTime: "15 min read",
    publishDate: "2023-12-10",
    category: "development",
    tags: ["growth", "milestones", "first year"],
    thumbnail: "https://moonkieshop.com/cdn/shop/articles/istock-1070066292_2667.jpg?v=1705483064&width=1500",
    type: "audio",
  },
  {
    id: 5,
    title: "Breastfeeding Tips for New Mothers",
    description: "Expert advice for overcoming common breastfeeding challenges",
    url: "https://example.com/breastfeeding-tips",
    author: "Lactation Consultant Team",
    readTime: "9 min read",
    publishDate: "2024-03-01",
    category: "feeding",
    tags: ["breastfeeding", "newborn", "latching"],
    thumbnail: "https://kangaroocareindia.com/static/media/blog-34.66b52c08f84222a06361.jpg",
    type: "article",
  },
  {
    id: 6,
    title: "The Importance of Tummy Time",
    description: "How tummy time helps your baby's development and ways to make it enjoyable",
    url: "https://example.com/tummy-time",
    author: "Pediatric Physical Therapists",
    readTime: "7 min read",
    publishDate: "2024-02-15",
    category: "development",
    tags: ["motor skills", "play", "development"],
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdz5v7_6mOZStFh66GSYg0KMWdbpRfM56bA&s",
    type: "audio",
  },
];

const categories = [
  { id: "all", name: "All Resources" },
  { id: "feeding", name: "Feeding & Nutrition" },
  { id: "sleep", name: "Sleep & Rest" },
  { id: "development", name: "Development" },
  { id: "health", name: "Health & Safety" },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = "Resources | NeoNest";
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      !searchTerm ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-800">Parenting Resources</h2>
        <p className="text-lg text-gray-600">Curated articles to support your parenting journey</p>
      </div>

      {/* Search + Filter Section with Divider */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 w-full">
        {/* Search Bar (Left) */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 inset-y-0 flex items-center h-full text-gray-400 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 w-full"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex items-center justify-center px-2">
          <div className="w-px h-full bg-[linear-gradient(to_bottom,rgba(255,182,193,0.3),rgba(221,160,221,0.3))] hidden sm:block"></div>
        </div>

        {/* Filter Section (Right) */}
        <div className="flex-1 md:max-w-2xl bg-[linear-gradient(to_right,rgba(255,182,193,0.3),rgba(221,160,221,0.3))] backdrop-blur-md border border-pink-200/60 rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-start gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Category:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => setSelectedCategory(category.id)}
              size="sm"
              className={`rounded-xl text-sm ${
                selectedCategory === category.id
                  ? "bg-white text-pink-700 font-semibold border-pink-300 border-2 hover:bg-white hover:text-pink-400"
                  : "text-gray-600 border-gray-200 font-normal hover:bg-white"
              }`}>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Horizontal dividing line (below Search + Filter section) */}
      <div className="w-full h-px bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 animate-pulse mt-1"></div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between cursor-default overflow-hidden h-full">
            {/* Thumbnail */}
            {article.thumbnail && (
              <div className="overflow-hidden rounded-t-xl border-b border-gray-200">
                <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            )}

            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between"></div>
              <CardTitle className="text-lg mt-2 text-gray-800 transition-colors duration-200 group-hover:text-pink-600">{article.title}</CardTitle>
            </CardHeader>

            <CardContent className="px-4 pb-6 pt-0 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>

                <div className="space-y-1 mb-4 text-sm text-gray-500">
                  <div className="text-gray-600">By {article.author}</div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <div>{new Date(article.publishDate).toLocaleDateString("en-GB")}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 hover:from-pink-600 hover:to-purple-600 hover:text-white font-medium rounded-xl transition-all duration-200 cursor-pointer"
                variant="ghost"
                onClick={() => window.open(article.url, "_blank")}>
                <ExternalLink className="w-4 h-4 mr-2" />
                {article.type === "video" ? "Watch Video" : article.type === "audio" ? "Listen Audio" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="rounded-xl text-pink-600 border-pink-300 hover:bg-pink-50 hover:text-pink-700">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
