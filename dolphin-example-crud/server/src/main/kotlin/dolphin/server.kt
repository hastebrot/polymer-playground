package dolphin

import com.canoo.platform.remoting.DolphinBean
import com.canoo.platform.remoting.Property
import com.canoo.platform.remoting.server.DolphinAction
import com.canoo.platform.remoting.server.DolphinController
import com.canoo.platform.remoting.server.DolphinModel
import com.canoo.platform.server.spring.DolphinPlatformApplication
import org.springframework.boot.SpringApplication
import org.springframework.boot.web.support.SpringBootServletInitializer
import javax.annotation.PostConstruct

//-------------------------------------------------------------------------------------------------
// APPLICATION.
//-------------------------------------------------------------------------------------------------

fun main(args: Array<String>) {
    SpringApplication.run(CrudExampleServerApplication::class.java)
}

@DolphinPlatformApplication
open class CrudExampleServerApplication : SpringBootServletInitializer()

//-------------------------------------------------------------------------------------------------
// CONTROLLERS.
//-------------------------------------------------------------------------------------------------

@DolphinController("CrudExampleController")
open class CrudExampleController {
    @DolphinModel
    private lateinit var model: CrudExampleBean

    @PostConstruct
    fun init() {
        model.valueProperty().onChanged { event ->
            println("value = ${event.newValue}")
        }
    }

    @DolphinAction
    fun reset() {
        model.value = null
    }
}

//-------------------------------------------------------------------------------------------------
// BEANS.
//-------------------------------------------------------------------------------------------------

@DolphinBean
class CrudExampleBean {
    private lateinit var valueProperty: Property<String?>
    fun valueProperty() = valueProperty

    var value: String?
        get() = valueProperty.get()
        set(value) = valueProperty.set(value)
}
