# Custom plugin to generate image switcher

module Jekyll
  class ImageSwitch < Liquid::Block

      def render(context)
          site = context.registers[:site]
          converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
          content = super
          converted = converter.convert(content)
          "<div class=\"image-switch\">"+converted+"</div>"
      end
  end
end

Liquid::Template.register_tag('imageswitch', Jekyll::ImageSwitch)
