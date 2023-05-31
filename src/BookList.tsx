import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getBookList } from "./fetch";

interface Book {
  name: string;
  category: {
    name: string;
  };
  author: {
    name: string;
  };
  publisher: {
    name: string;
  };
  id: string; // Assuming there's an `id` property in the book object
}

export const BooksTable: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data: { results: Book[] } = await getBookList();
        setBooks(data.results);
        setLoading(false);
      } catch (error) {
        // Handle error
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: { name: string }) => category.name,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (author: { name: string }) => author.name,
    },
    {
      title: "Publisher",
      dataIndex: "publisher",
      key: "publisher",
      render: (publisher: { name: string }) => publisher.name,
    },
  ];

  return (
    <Table<Book>
      columns={columns}
      dataSource={books}
      loading={loading}
      rowKey={(record) => record.id}
    />
  );
};

export default BooksTable;
