/*
  Warnings:

  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Posts";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
