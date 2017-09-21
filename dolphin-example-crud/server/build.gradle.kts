// gradle wrapper --gradle-version 4.2 --distribution-type all

plugins {
    kotlin("jvm", "1.1.4-3")
}

repositories {
    jcenter()
}

dependencies {
    fun DependencyHandler.dolphinPlatform(module: String, version: String): Any =
            "com.canoo.dolphin-platform:dolphin-platform-$module:$version"

    compile(kotlin("stdlib", "1.1.4-3"))
    compile(dolphinPlatform("remoting-server-spring", "0.18.0"))
}

