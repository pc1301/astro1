export const GET = () => {

    return new Response(
        JSON.stringify(
            {
                message: "This is get"
            }
        )
    )
}