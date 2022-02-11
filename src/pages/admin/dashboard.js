import { setTitle } from "../../utils";

const DashboardPage = {
    before_render() {
        setTitle("Dashboard");
    },
    after_render() {
    },
    render() {
        return /* html */`
        <header class="bg-white shadow">
        <div class="max-w-7x px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">DASHBOARD</h2>
            </div>

            </div>
        </div>
        </header>
        `;
    },
};
export default DashboardPage;