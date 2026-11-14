import { MdOutlineEmail } from "react-icons/md";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function CardConfirmationEmail() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-5.5 justify-center items-center p-6 bg-surface sm:w-[80%] w-[90%] lg:w-[35%]  rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-3">
            <MdOutlineEmail className="text-4xl" />
            <h2 className="text-3xl font-bold">Confirmação de E-mail</h2>
          </div>

          <hr className="bg-zinc-100 w-full" />
        </div>

        <div className="text-center">
          <p className="text-[1.1rem]">Confirme seu email para</p>
          <p className="text-[1.1rem]"> prosseguir na criação da sua conta</p>
        </div>

        <p className="text-zinc-400 font-extrabold">
          Olhe o SPAM caso não tenha encontrado
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
