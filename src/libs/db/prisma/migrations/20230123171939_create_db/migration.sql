-- CreateEnum
CREATE TYPE "Level" AS ENUM ('DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "groups" TEXT,
    "address" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "quota" INTEGER,
    "month_count" INTEGER,
    "thumbnailphoto" TEXT,
    "job_count" INTEGER,
    "printers" TEXT,
    "default_printer" TEXT,
    "modified" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Printer" (
    "id" SERIAL NOT NULL,
    "allow" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT,
    "localization" TEXT,
    "connection" TEXT,
    "definitions" TEXT,
    "driver" TEXT,
    "groups" TEXT,
    "icon" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "selected" BOOLEAN NOT NULL DEFAULT false,
    "month_count" INTEGER NOT NULL DEFAULT 0,
    "quota_period" INTEGER NOT NULL DEFAULT 0,
    "page_limite" INTEGER NOT NULL DEFAULT 0,
    "k_limit" INTEGER NOT NULL DEFAULT 0,
    "modified" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Printer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spool" (
    "id" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "printer" TEXT NOT NULL,
    "pages" INTEGER,
    "host" TEXT,
    "filename" TEXT NOT NULL,
    "size" INTEGER,
    "encoding" TEXT,
    "path" TEXT NOT NULL,
    "data" TEXT,
    "mimetype" TEXT NOT NULL,
    "md5" TEXT,
    "params" TEXT,
    "status" TEXT,
    "complete" BOOLEAN DEFAULT false,
    "description" TEXT,
    "modified" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Spool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "group" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "modified" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logger" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "Level" DEFAULT 'INFO',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Printer_name_key" ON "Printer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Printer_path_key" ON "Printer"("path");

-- CreateIndex
CREATE INDEX "Spool_user_printer_idx" ON "Spool"("user", "printer");
