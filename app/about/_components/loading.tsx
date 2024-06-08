import Image from "next/image";

export const Loading = () => {
    return (
        <main className="flex flex-col w-full h-full items-center justify-center bg-red-800">
            <Image
                src={"public/next.svg"}
                alt="logo"
                width={200}
                height={200}
                className="animate-pulse duration-700 m-auto"
            />
        </main>
    );
}
