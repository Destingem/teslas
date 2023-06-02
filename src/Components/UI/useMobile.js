import { useViewportSize } from "@mantine/hooks";

export default function useMobile(){

    const { height, width } = useViewportSize();
    let mobile = width < 768 ? true : false;

    return mobile;
}