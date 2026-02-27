export default function Pattern() {
    return (
        <div className="pointer-events-none z-10 inset-0 absolute perspective-distant overflow-hidden">
            <div
                className="absolute -inset-[10%] opacity-60
                     bg-[linear-gradient(to_right,#F0F5FF_1px,transparent_1px),linear-gradient(to_bottom,#F0F5FF_1px,transparent_1px)]
                     bg-size-[80px_80px]
                     transform-[rotateX(20deg)_rotateZ(-2deg)_translateY(-5%)]"
            />
        </div>
    )
}