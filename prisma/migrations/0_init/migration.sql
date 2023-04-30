-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "senha" VARCHAR(20) NOT NULL,
    "data_aniver" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moedas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dolar" INTEGER NOT NULL,
    "diamante" INTEGER NOT NULL,

    CONSTRAINT "Moedas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Moedas_usuarioId_key" ON "Moedas"("usuarioId");

-- AddForeignKey
ALTER TABLE "Moedas" ADD CONSTRAINT "Moedas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

