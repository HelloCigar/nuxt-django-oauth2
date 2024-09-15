export default function useSocialTypeGuard(data: GoogleExtraData | GithubExtraData | null): data is GoogleExtraData {
    return (data as GoogleExtraData).extra_data.hasOwnProperty('picture');
}